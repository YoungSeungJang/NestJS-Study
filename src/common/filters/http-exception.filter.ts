import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

// catch 데코레이터는 이 필터가 httpexception 타입의 에러만 잡겠다는 뜻
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();  // 1. 실행 컨텍스트에서 HTTP 관련 객체를 가져옴
        const response = ctx.getResponse<Response>(); // 2. Express의 Response 객체를 가져옴
        const request = ctx.getRequest<Request>(); // 3. Express의 Request 객체를 가져옴
        const status = exception.getStatus(); // 4. 예외가 발생한 상태코드(400, 404)

        // exception에서 message 부분을 추출
        // string일 수도 있고, object일 수도 있을 가능성이 있어 분기 처리
        const errorResponse = exception.getResponse()
        console.log(errorResponse)
        const message = typeof errorResponse === 'object' ? errorResponse['message']:errorResponse;

        // 5. 우리가 원하는 형태로 응답 JSON을 조립
        response.status(status).json({
            timestamp: new Date().toISOString(),
            statusCode: status,
            // message:message,
            path: request.url,
            success:false,
        })
    }
}