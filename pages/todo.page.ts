import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;

  readonly addItemTab: Locator;
  readonly todoTab: Locator;
  readonly completedTab: Locator;

  readonly input: Locator;
  readonly addButton: Locator;

  readonly todoItems: Locator;
  readonly completedItems: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addItemTab = page.locator('a[href="#add-item"]');
    this.todoTab = page.locator('a[href="#todo"]');
    this.completedTab = page.locator('a[href="#completed"]');

    this.input = page.locator('#new-task');
    this.addButton = page.locator('i.material-icons:text("add")').locator('..');

    this.todoItems = page.locator('#incomplete-tasks li');
    this.completedItems = page.locator('#completed-tasks li');
  }

  async goToPage() {
    await this.page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(this.page.locator('h1')).toHaveText('To Do List');
  }

  async addTodo(text: string) {
    await this.addItemTab.click();
    await this.input.fill(text);
    await this.addButton.click();
    await this.todoTab.click();

    await expect(this.todoItems).toContainText(text);
  }

  // CHECK MARK
  async markTodo(index: number) {
    await this.todoTab.click();

    const checkbox = this.todoItems
      .nth(index)
      .locator('input.mdl-checkbox__input');
    await checkbox.click();

    await this.completedTab.click();
    await expect(this.completedItems).toHaveCount(1);
  }

  // DELETE
  async deleteTodo(index: number) {
    await this.completedTab.click();

    const deleteBtn = this.completedItems
      .nth(index)
      .locator('button.delete');

    await deleteBtn.click();

    await expect(this.completedItems).toHaveCount(0);
  }
}
