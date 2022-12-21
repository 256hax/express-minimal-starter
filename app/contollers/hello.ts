import * as dotenv from 'dotenv'
import { Router } from 'express';

dotenv.config();
export const router = Router();

router.post("/", async(req, res, next) => {
  try {
    res.header('Content-Type', 'application/json; charset=utf-8');
    
    const nickName = req.body.nick_name; // Get request parameta
    const symbol = '!@#$%^&*()"<>'; // Example symbole for view
    const sampleKey = process.env.DOT_SAMPLE_KEY; // dotenv

    res.render(
      'hello',
      {
        nickName: nickName,
        symbol: symbol,
        sampleKey: sampleKey,
      }
    );
  } catch (error) {
    next(error);
  }
});