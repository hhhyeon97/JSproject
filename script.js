
// 랜덤번호 지정
// 유저가 번호를 입력하고 go 라는 버튼을 누름
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down !!!
// 랜덤번호가 > 유저번호 Up !!
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다 (더 이상 추측 불가, 버튼이 disable)
// 유저가 1 ~ 100  범위 밖 숫자를 입력하면 알려준다. 기회는 그대로 유지한다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회는 그대로 유지한다.


let randomNum = 0
let playButton = document.getElementById("playBtn")
let userInput = document.getElementById("userInput")
let resultArea = document.getElementById("resultArea")
let resetButton = document.getElementById("resetBtn")
let chances = 10
let gameOver = false
let chanceArea = document.getElementById("chanceArea")
let history=[]

// addEventListener (이벤트 이름, 이벤트 발생시 실행할 함수)
playButton.addEventListener("click",play) // 함수를 매개변수로 넘김 / 함수가 매개변수로 들어갈 땐 ()를 빼야 한다!
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){ // (익명함수) 간단한 처리를 할 때는 함수 이름을 설정하지 않는 것도 가능하다.
    userInput.value="";
});

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        play();
    }
});

function pickRandomNum(){
    randomNum = Math.floor(Math.random() *100)+1; // 1 ~ 100까지 범위 설정
    console.log("정답",randomNum);
}

function play(){
    //유저가 입력한 값 가져오기
    let userValue = userInput.value

    //유저가 범위를 넘는 값을 입력할 시 처리
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100 사이 숫자를 입력해주세요"
        userInput.value=""
        userInput.focus()
        return; // 남은 기회 줄어들지 않게 처리
    }

    //히스토리에 이미 같은 값이 존재한다면
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력했던 숫자입니다.\n다른 숫자를 입력해주세요."
        return;
    }

    // 남은 찬스
    chances --;
    chanceArea.textContent=`남은 기회 : ${chances}번`; // 동적으로 값 보여줄 때 백틱으로 감싸고 동적값은${}안에 넣기
    console.log("남은 횟수 : ",chances)


    if(userValue < randomNum){
        resultArea.textContent = "Up !!!"
        resultArea.style.color = "#c91649";
    }else if(userValue > randomNum){
        resultArea.textContent = "Down !!!"
        resultArea.style.color = "blue";
    }else {
        resultArea.textContent = "맞췄습니다 !!!"
        resultArea.style.color = "black";
        gameOver = true
    }

    
    history.push(userValue)
    console.log(history)

    if(chances <1){
        gameOver = true
    }
    if(gameOver){
        playButton.disabled = true;
    }

}


function reset(){
    // 유저 입력창 reset / 새로운 랜덤번호 생성
    userInput.value = ""
    pickRandomNum()
    resultArea.textContent=" "
    chanceArea.textContent="남은 기회 : 10번"
    playButton.disabled = false;
}


pickRandomNum()
