import axios from 'axios';

export const getTasksRequest = async () =>
  await axios.get('https://containers-us-west-70.railway.app:6347/tasks');

export const createTaskRequest = async (task) =>
  await axios.post('https://containers-us-west-70.railway.app:6347/tasks', task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`https://containers-us-west-70.railway.app:6347/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`https://containers-us-west-70.railway.app:6347/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`https://containers-us-west-70.railway.app:6347/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`https://containers-us-west-70.railway.app:6347/tasks/${id}`, { done });
