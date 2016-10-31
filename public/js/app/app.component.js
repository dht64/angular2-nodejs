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
var message_model_1 = require('./message.model');
var message_service_1 = require('./message.service');
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.onAddMessage = function () {
        var rnd = Math.ceil(Math.random() * 100);
        var message = new message_model_1.Message(rnd + ' is an awesome number!');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw4QkFBd0IsaUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQVFuRDtJQUdJLHNCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbEQsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRXRELCtCQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQy9CLFNBQVMsQ0FDVCxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQU0sT0FBTyxHQUFHLElBQUksdUJBQU8sQ0FBQyxHQUFHLEdBQUcsd0JBQXdCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDdEMsU0FBUyxDQUNULGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixFQUM3QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQzdCLENBQUM7SUFDSixDQUFDO0lBN0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBRWhDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDOUIsQ0FBQzs7b0JBQUE7SUF3QkYsbUJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLG9CQUFZLGVBdUJ4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuXG4gICAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICBcdHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxuICAgIFx0XHQuc3Vic2NyaWJlKFxuICAgIFx0XHRcdG1lc3NhZ2VzID0+IHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcyxcbiAgICBcdFx0XHRlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIFx0XHQpO1xuICAgIH1cblxuICAgIG9uQWRkTWVzc2FnZSgpIHtcbiAgICBcdGNvbnN0IHJuZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICBcdGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShybmQgKyAnIGlzIGFuIGF3ZXNvbWUgbnVtYmVyIScpO1xuICAgIFx0dGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIFx0dGhpcy5tZXNzYWdlU2VydmljZS5zYXZlTWVzc2FnZShtZXNzYWdlKVxuICAgIFx0XHQuc3Vic2NyaWJlKFxuICAgIFx0XHRcdCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzIScpLFxuICAgIFx0XHRcdGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgXHRcdCk7XG4gICAgfVxufSJdfQ==
