import React from "react";

    function ComponentOnlyOnce(){
        const [time, setTime] = React.useState(0);
      React.useEffect(() => {
            setTime(time+1); //state를 바꿔서 또 렌더링이 되더라도 setTime은 호출되지 않습니다.
        console.log('컴포넌트가 화면에 처음 렌더링될 때 딱 한 번 실행됩니다.');
      }, []);

    return(
        <div>
            <h3>{time}초</h3>
            {/*클릭시 setTime 으로 state 를 업데이트 한다.*/}
            <button onClick={updateTime}>1씩 올려라</button>
        </div>
    )
}

export default TimerComponent