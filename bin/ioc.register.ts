import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoggerAdapter } from '../adapters/logger.adapter';

container.registerSingleton('LoggerAdapter', LoggerAdapter);