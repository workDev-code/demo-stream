export const successResponse = (res, data = {}, status = 200) => {
  return res.status(status).json({
    is_success: true,
    data: data, // gói chung vào 1 key
  });
};

export const errorResponse = (
  res,
  error = { message: "Internal Server Error" },
  status = 500
) => {
  return res.status(status).json({
    is_success: false,
    error, // cho phép object { message, code, details }
  });
};
