'use strict';

// 1. 게임 시작 버튼 - 랜덤한 세 자리 숫자 (보이지 않게)
const start = document.querySelector('.box-start');
const hidden = document.querySelector('.hidden');

start.addEventListener('click', function () {
  const naturalOne = Math.floor((Math.random() * (10 - 0)) + 0);
  const naturalTwo = Math.floor((Math.random() * (10 - 0)) + 0);
  const naturalThree = Math.floor((Math.random() * (10 - 0)) + 0);

  const randomString = `${naturalOne}${naturalTwo}${naturalThree}`;
  hidden.innerText = randomString;
});

// 2. 엔터 키 - 세 자리 숫자 x, 경고 창
// 3. 엔터 키 - '랜덤 숫자' vs '입력 값' 비교, 볼/스트라이크 출력
// 4. 사용자가 10회까지 시도할 수 있도록 제한
// 6. 세 자리 숫자 입력 시에만 10회에 포함되도록
const enter = document.querySelector('.box-field-enter');
const userString = document.querySelector('#box-field-input');
const result = document.querySelector('.box-result');

let click = 0;

enter.addEventListener('click', function clickEnter () {
  // hidden.innerText(랜덤 숫자)는 string
  // userString.value(사용자 입력 값)도 string
  const random = hidden.innerText;
  const user = userString.value;

  const a = Number(random[0]);
  const b = Number(random[1]);
  const c = Number(random[2]);
  const x = Number(user[0]);
  const y = Number(user[1]);
  const z = Number(user[2]);

  function compareAX () {
    if (a === x) {
      return 'strike';
    }
  }

  function compareAY () {
    if (a === y) {
      return 'ball';
    }
  }

  function compareAZ () {
    if (a === z) {
      return 'ball';
    }
  }

  function compareBX () {
    if (b === x) {
      return 'ball';
    }
  }

  function compareBY () {
    if (b === y) {
      return 'strike';
    }
  }

  function compareBZ () {
    if (b === z) {
      return 'ball';
    }
  }

  function compareCX () {
    if (c === x) {
      return 'ball';
    }
  }

  function compareCY () {
    if (c === y) {
      return 'ball';
    }
  }

  function compareCZ () {
    if (c === z) {
      return 'strike';
    }
  }

  const array = [compareAX(), compareAY(), compareAZ(), compareBX(), compareBY(), compareBZ(), compareCX(), compareCY(), compareCZ()];

  const strikeCount = array.filter(e => e === 'strike').length;
  const ballCount = array.filter(e => e === 'ball').length;

  if (user.length !== 3) {
    alert('세 자리 숫자를 입력해야 합니다.');
  } else if (user.length === 3) {
    result.innerText = `${strikeCount} strike ${ballCount} ball`;
    click++;
    if (click === 10) {
      enter.removeEventListener('click', clickEnter);
    }
  }
});

// 5. 게임 재시작 버튼
const restart = document.querySelector('.box-restart');

restart.addEventListener('click', function () {
  result.innerText = '';
});
