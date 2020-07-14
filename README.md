## Description

Angular 내장 지시자에 대한 내용을 정리합니다.

### *ngIf, *ngSwitch
###### *ngIf
조건식이 참이면 해당 태그를 랜더링 합니다.
```bash
// 아래 문장은 랜더링 됩니다.
<div *ngIf = "true">true</div>
```
###### *ngSwitch
다른 프로그래밍 언어에서의 switch 문의 역할과 동일합니다.
다른점은, 동일한 case를 중복으로 등록하여 표현할 수도 있습니다.
```bash
// choice === 2 인 경우 두 개의 항목이 랜더링 됩니다.
<ul [ngSwitch]="choice">
  <li *ngSwitchCase="1">First choice</li>
  <li *ngSwitchCase="2">Second choice</li>
  <li *ngSwitchCase="3">Third choice</li>
  <li *ngSwitchCase="4">Fourth choice</li>
  <li *ngSwitchCase="2">Second choice, again</li>
  <li *ngSwitchDefault>Default choice</li>
</ul>
```

### ngStyle
ngStyle을 사용하면, DOM 요소의 CSS 프로퍼티를 동적으로 설정할 수 있습니다.

### ngFor
일반 프로그래밍에서의 for 문 처럼 사용할 수 있습니다.
해당 태그가 for 문을 돌며, item 갯수 만큼 만들어집니다. (다중 ngFor도 사용 가능합니다.)
```bash
<div class="ui list" *ngFor="let c of cities; let num = index">
  <div class="item">{{ num+1 }} - {{ c }}</div>
</div>
```
위와 같이 for 문의 index에 접근할 수도 있습니다. (index는 0부터 시작합니다.)
