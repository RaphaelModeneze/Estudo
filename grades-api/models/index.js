import mongoose from 'mongoose';

import gradesModel from './gradesModel.js';

const db = {};
db.mongoose = mongoose;
db.grade = gradesModel(mongoose);
db.url = process.env.MONGODB;

export { db };
