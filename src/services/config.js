// 开发环境
const devBaseURL = "http://123.207.32.32:9001";
// 正式环境
const proBaseURL = "http://123.207.32.32:9001";

//判断是生产环境还是正式环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

//超时配置
export const TIMEOUT = 5000;
