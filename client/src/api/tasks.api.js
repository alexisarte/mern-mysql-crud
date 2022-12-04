import axios from 'axios';
import { DB_HOST, PORT } from '../../../server/config.js';

export const getTasksRequest = async () =>
  await axios.get(`http://${DB_HOST}:${PORT}/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`http://${DB_HOST}:${PORT}/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://${DB_HOST}:${PORT}/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://${DB_HOST}:${PORT}/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://${DB_HOST}:${PORT}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://${DB_HOST}:${PORT}/tasks/${id}`, { done });
