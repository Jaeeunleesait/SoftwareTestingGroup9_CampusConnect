import request from 'supertest';
import { app } from '../server';
import admin from 'firebase-admin';
import { prisma } from '../config/prismaClient';

// Mock Firebase Admin
jest.mock('firebase-admin', () => ({
  auth: jest.fn(() => ({
    verifyIdToken: jest.fn(),
    createSessionCookie: jest.fn(),
  })),
}));

// Mock Prisma Client
jest.mock('../config/prismaClient', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
    admin: {
      findUnique: jest.fn(),
    },
  },
}));

describe('Admin Login', () => {
  let server: any;

  beforeAll(() => {
    // Start the server before all tests
    server = app.listen(8080);
  });

  afterAll((done) => {
    // Close the server after all tests
    server.close(done);
  });

  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it('should log in admin with valid credentials', async () => {
    // Mock Firebase Admin verifyIdToken
    (admin.auth().verifyIdToken as jest.Mock).mockResolvedValue({
      uid: '123',
      email: 'admin@example.com',
    });

    // Mock Prisma User findUnique
    (prisma.user.findUnique as jest.Mock).mockResolvedValue({
      user_id: '123',
      email: 'admin@example.com',
      role: 'Admin',
      first_name: 'John',
      last_name: 'Doe',
    });

    // Mock Prisma Admin findUnique
    (prisma.admin.findUnique as jest.Mock).mockResolvedValue({
      user_id: '123',
      permissions: ['read', 'write'],
    });

    // Mock Firebase Admin createSessionCookie
    (admin.auth().createSessionCookie as jest.Mock).mockResolvedValue('session-cookie');

    // Simulate a valid admin login request
    const response = await request(app)
      .post('/api/auth/login-admin')
      .set('Authorization', 'Bearer valid-token')
      .send({});

    // Assertions
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe(
      'Welcome to Campus Connect Admin Portal! John Doe'
    );
    expect(response.body.data).toEqual({
      user_id: '123',
      email: 'admin@example.com',
      role: 'Admin',
      first_name: 'John',
      last_name: 'Doe',
      permission: ['read', 'write'],
    });
    expect(response.headers['set-cookie']).toBeDefined(); // Check if session cookie is set
  });

  it('should return 403 if user is not an admin', async () => {
    // Mock Firebase Admin verifyIdToken
    (admin.auth().verifyIdToken as jest.Mock).mockResolvedValue({
      uid: '123',
      email: 'user@example.com',
    });

    // Mock Prisma User findUnique
    (prisma.user.findUnique as jest.Mock).mockResolvedValue({
      user_id: '123',
      email: 'user@example.com',
      role: 'User', // Non-admin role
    });

    // Simulate a login request with a non-admin user
    const response = await request(app)
      .post('/api/auth/login-admin')
      .set('Authorization', 'Bearer valid-token')
      .send({});

    // Assertions
    expect(response.statusCode).toBe(403);
    expect(response.body.status).toBe('error');
    expect(response.body.message).toBe(
      'Forbidden Access: Admin privileges required. Please contact support.'
    );
  });

  it('should return 500 if an internal server error occurs', async () => {
    // Mock Firebase Admin verifyIdToken to throw an error
    (admin.auth().verifyIdToken as jest.Mock).mockRejectedValue(
      new Error('Internal Server Error')
    );

    // Simulate a login request that triggers an internal server error
    const response = await request(app)
      .post('/api/auth/login-admin')
      .set('Authorization', 'Bearer valid-token')
      .send({});

    // Assertions
    expect(response.statusCode).toBe(500);
    expect(response.body.status).toBe('error');
    expect(response.body.message).toBe('Internal Server Error');
  });
});


// import request from 'supertest';
// import app from '../src/server';
// import admin from 'firebase-admin';
// import { prisma } from '../src/config/prismaClient';


// // Mock Firebase Admin
// jest.mock('firebase-admin', () => ({
//     auth: jest.fn(() => ({
//       verifyIdToken: jest.fn(),
//       createSessionCookie: jest.fn(),
//     })),
//   }));
  
//   // Mock Prisma Client
//   jest.mock('../src/config/prismaClient', () => ({
//     prisma: {
//       user: {
//         findUnique: jest.fn(),
//       },
//       admin: {
//         findUnique: jest.fn(),
//       },
//     },
//   }));
  
//   describe('Admin Login', () => {
//     beforeEach(() => {
//       jest.clearAllMocks(); // Clear all mocks before each test
//     });
  
//     it('should log in admin with valid credentials', async () => {
//       // Mock Firebase Admin verifyIdToken
//       (admin.auth().verifyIdToken as jest.Mock).mockResolvedValue({
//         uid: '123',
//         email: 'admin@example.com',
//       });
  
//       // Mock Prisma User findUnique
//       (prisma.user.findUnique as jest.Mock).mockResolvedValue({
//         user_id: '123',
//         email: 'admin@example.com',
//         role: 'Admin',
//         first_name: 'John',
//         last_name: 'Doe',
//       });
  
//       // Mock Prisma Admin findUnique
//       (prisma.admin.findUnique as jest.Mock).mockResolvedValue({
//         user_id: '123',
//         permissions: ['read', 'write'],
//       });
  
//       // Mock Firebase Admin createSessionCookie
//       (admin.auth().createSessionCookie as jest.Mock).mockResolvedValue('session-cookie');
  
//       // Simulate a valid admin login request
//       const response = await request(app)
//         .post('/api/auth/login-admin')
//         .set('Authorization', 'Bearer valid-token')
//         .send({});
  
//       // Assertions
//       expect(response.statusCode).toBe(200);
//       expect(response.body.status).toBe('success');
//       expect(response.body.message).toBe(
//         'Welcome to Campus Connect Admin Portal! John Doe'
//       );
//       expect(response.body.data).toEqual({
//         user_id: '123',
//         email: 'admin@example.com',
//         role: 'Admin',
//         first_name: 'John',
//         last_name: 'Doe',
//         permission: ['read', 'write'],
//       });
//       expect(response.headers['set-cookie']).toBeDefined(); // Check if session cookie is set
//     });
  
//     it('should return 403 if user is not an admin', async () => {
//       // Mock Firebase Admin verifyIdToken
//       (admin.auth().verifyIdToken as jest.Mock).mockResolvedValue({
//         uid: '123',
//         email: 'user@example.com',
//       });
  
//       // Mock Prisma User findUnique
//       (prisma.user.findUnique as jest.Mock).mockResolvedValue({
//         user_id: '123',
//         email: 'user@example.com',
//         role: 'User',                                                   // Non-admin role
//       });
  
//       // Simulate a login request with a non-admin user
//       const response = await request(app)
//         .post('/api/auth/login-admin')
//         .set('Authorization', 'Bearer valid-token')
//         .send({});
  
//       // Assertions
//       expect(response.statusCode).toBe(403);
//       expect(response.body.status).toBe('error');
//       expect(response.body.message).toBe(
//         'Forbidden Access: Admin privileges required. Please contact support.'
//       );
//     });
  
//     it('should return 500 if an internal server error occurs', async () => {
//       // Mock Firebase Admin verifyIdToken to throw an error
//       (admin.auth().verifyIdToken as jest.Mock).mockRejectedValue(
//         new Error('Internal Server Error')
//       );
  
//       // Simulate a login request that triggers an internal server error
//       const response = await request(app)
//         .post('/api/auth/login-admin')
//         .set('Authorization', 'Bearer valid-token')
//         .send({});
  
//       // Assertions
//       expect(response.statusCode).toBe(500);
//       expect(response.body.status).toBe('error');
//       expect(response.body.message).toBe('Internal Server Error');
//     });
//   });