import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer_mail_adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma_feedbacks_repository';
import { SubmitFeedbackUseCase } from './use_cases/submit_feedback_use_case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  return res.status(201).send();
})