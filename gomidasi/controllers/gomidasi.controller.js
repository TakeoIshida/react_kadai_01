// controllers/omikuji.controller.js

import { getGomidasi } from "../services/gomidasi.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getGomidasi(req.body);
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Successfully get Gomidasi!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
