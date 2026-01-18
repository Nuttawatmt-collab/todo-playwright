import { test } from '@playwright/test';
import { TodoPage } from '../pages/todo.page';

/* ---------- TC_01 ---------- */
test('TC_01 Go to page', async ({ page }) => {
  const todo = new TodoPage(page);

  await todo.goToPage();
});

/* ---------- TC_02 ---------- */
test('TC_02 Add todo', async ({ page }) => {
  const todo = new TodoPage(page);

  await todo.goToPage();
  await todo.addTodo('Read a book');
});

/* ---------- TC_03 ---------- */
test('TC_03 Mark todo', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goToPage();
  await todo.addTodo('Read a book');
  await todo.markTodo(0);
});

/* ---------- TC_04 ---------- */
test('TC_04 Delete todo', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goToPage();
  await todo.addTodo('Read a book');
  await todo.markTodo(0);
  await todo.deleteTodo(0);
});
