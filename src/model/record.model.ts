import { Schema, Model, model } from 'mongoose'
import { IRecord } from './../domain/interfaces/record.interface';

const recordSchema = new Schema({
    display: {
        type: String,
    },
    result: {
        type: Number
    },
    date: {
        type: String
    },
    name: {
        type: String
    }
})

export const RecordModel: Model<IRecord> = model<IRecord>('Records', recordSchema)