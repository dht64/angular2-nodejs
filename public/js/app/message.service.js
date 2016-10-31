"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var message_model_1 = require('./message.model');
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/messages')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new message_model_1.Message(element.content);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/message', body, { headers: headers });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDhCQUF3QixpQkFBaUIsQ0FBQyxDQUFBO0FBSTFDO0lBQ0Msd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxvQ0FBVyxHQUFYO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO2FBQ3BELEdBQUcsQ0FBRSxVQUFDLElBQWM7WUFDcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztZQUMvQixJQUFJLE9BQU8sQ0FBQztZQUNaLEdBQUcsQ0FBQyxDQUFnQixVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTlCLElBQUksT0FBTyxTQUFBO2dCQUNmLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBZ0I7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUF2QkY7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXdCYixxQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksc0JBQWMsaUJBc0IxQixDQUFBIiwiZmlsZSI6Im1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcblx0Z2V0TWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZXMnKVxyXG5cdFx0XHQubWFwKCAoZGF0YTogUmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBleHRyYWN0ZWQgPSBkYXRhLmpzb24oKTtcclxuXHRcdFx0XHRjb25zdCBtc2dBcnJheTogTWVzc2FnZVtdID0gW107XHJcblx0XHRcdFx0bGV0IG1lc3NhZ2U7XHJcblx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBleHRyYWN0ZWQuZGF0YSkge1xyXG5cdFx0XHRcdFx0bWVzc2FnZSA9IG5ldyBNZXNzYWdlKGVsZW1lbnQuY29udGVudCk7XHJcblx0XHRcdFx0XHRtc2dBcnJheS5wdXNoKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbXNnQXJyYXk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2F2ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XHJcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pO1xyXG5cdH1cclxufSJdfQ==
