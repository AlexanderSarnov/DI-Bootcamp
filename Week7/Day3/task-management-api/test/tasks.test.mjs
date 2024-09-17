import request from 'supertest';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import app from '../index.js'; // Adjust the path if necessary

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tasksFilePath = path.join(__dirname, '../tasks.json');

// Helper function to reset the tasks.json file
const resetTasksFile = () => {
    fs.writeFileSync(tasksFilePath, JSON.stringify([], null, 2));
};

describe('Task Management API', () => {
    beforeEach(() => {
        resetTasksFile();
    });

    describe('GET /api/tasks', () => {
        it('should retrieve a list of all tasks', (done) => {
            request(app)
                .get('/api/tasks')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.be.an('array').that.is.empty;
                    done();
                });
        });
    });

    describe('POST /api/tasks', () => {
        it('should create a new task', (done) => {
            const newTask = {
                title: 'Sample Task',
                description: 'This is a sample task',
            };
            request(app)
                .post('/api/tasks')
                .send(newTask)
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.include(newTask);
                    expect(res.body).to.have.property('id');
                    done();
                });
        });
    });

    describe('GET /api/tasks/:id', () => {
        it('should retrieve a specific task by ID', (done) => {
            const newTask = {
                title: 'Sample Task',
                description: 'This is a sample task',
            };
            request(app)
                .post('/api/tasks')
                .send(newTask)
                .end((err, res) => {
                    const taskId = res.body.id;
                    request(app)
                        .get(`/api/tasks/${taskId}`)
                        .expect(200)
                        .end((err, res) => {
                            if (err) return done(err);
                            expect(res.body).to.include(newTask);
                            expect(res.body).to.have.property('id', taskId);
                            done();
                        });
                });
        });
    });

    describe('PUT /api/tasks/:id', () => {
        it('should update a task by ID', (done) => {
            const newTask = {
                title: 'Sample Task',
                description: 'This is a sample task',
            };
            request(app)
                .post('/api/tasks')
                .send(newTask)
                .end((err, res) => {
                    const taskId = res.body.id;
                    const updatedTask = {
                        title: 'Updated Task',
                        description: 'This is an updated task',
                    };
                    request(app)
                        .put(`/api/tasks/${taskId}`)
                        .send(updatedTask)
                        .expect(200)
                        .end((err, res) => {
                            if (err) return done(err);
                            expect(res.body).to.include(updatedTask);
                            expect(res.body).to.have.property('id', taskId);
                            done();
                        });
                });
        });
    });

    describe('DELETE /api/tasks/:id', () => {
        it('should delete a task by ID', (done) => {
            const newTask = {
                title: 'Sample Task',
                description: 'This is a sample task',
            };
            request(app)
                .post('/api/tasks')
                .send(newTask)
                .end((err, res) => {
                    const taskId = res.body.id;
                    request(app)
                        .delete(`/api/tasks/${taskId}`)
                        .expect(204)
                        .end((err, res) => {
                            if (err) return done(err);
                            done();
                        });
                });
        });
    });
});
