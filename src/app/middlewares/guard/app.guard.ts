import {
  CanActivate,
  ExecutionContext,
  ForbiddenException
} from '@nestjs/common';
import { Observable } from 'rxjs';

export class AppGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const secret = process.env.SECRET_KEY;
    const request = context.switchToHttp().getRequest();
    const accessKey = this.extractKey(request);

    if (accessKey != secret) {
      throw new ForbiddenException();
    }

    return true;
  }

  extractKey(req: Request) {
    const header = req.headers;

    return header['access-key'];
  }
}
