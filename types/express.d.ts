import { TokenPayload } from "../src/auth/auth.interface";

/**
 * 扩转Express 的Request属性 user
 */
declare global {
  namespace Express {
    export interface Request {
      user: TokenPayload;
    }
  }
}
