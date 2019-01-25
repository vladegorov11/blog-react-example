export function getUser() {
  let user = JSON.parse(localStorage.getItem('blog_user'));
  return user;
}

export function setUser(user) {
  localStorage.setItem('blog_user', JSON.stringify(user));
  return user;
}

export function logOut() {
  localStorage.removeItem('blog_user');
}
