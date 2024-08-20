export function updateProgress(id) {
  let completedLessons =
    JSON.parse(localStorage.getItem("completedLessons")) || [];

  if (!completedLessons.includes(id)) {
    completedLessons.push(id);
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }

  return completedLessons.length;
}
