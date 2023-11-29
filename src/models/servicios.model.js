import { text } from 'express';
import mongoose, { model, Schema } from 'mongoose';

const datosDeReparacionSchema = new Schema({
    numero: {
        type: Number,
        unique: true,
        require: [true, 'El campo numero es requerido'],
        trim: true
    }, placa: {
        type: String,
        unique: false,
        require: [true, 'El campo placa es requerido'],
        trim: true
    }, horaReparacion: {
        type: Date,
        unique: false,
        require: [true, 'El campo horaReparacion es requerido'],
        trim: true
    },precioReparacion: {
        type: Number,
        unique: false,
        require: [true, 'El campo precioReparacion es requerido'],
        trim: true
    }, observaciones: {
        type: String,
        unique: false,
        require: [true, 'El campo observaciones es requerido'],
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
})

export default model('datosReparacion', datosDeReparacionSchema);