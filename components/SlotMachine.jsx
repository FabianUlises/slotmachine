class SlotMachine extends React.Component {
    render() {
        const slotImg = ['../img/cherry-1.png', '../img/cherry-2.png', '../img/cherry-3.png'];
        // Getting random number to get array index
        const randomNum1 = Math.floor(Math.random() * slotImg.length);
        const randomNum2 = Math.floor(Math.random() * slotImg.length);
        const randomNum3 = Math.floor(Math.random() * slotImg.length);
        const randomNum4 = Math.floor(Math.random() * slotImg.length);
        const randomNum5 = Math.floor(Math.random() * slotImg.length);
        const randomNum6 = Math.floor(Math.random() * slotImg.length);
        const randomNum7 = Math.floor(Math.random() * slotImg.length);
        const randomNum8 = Math.floor(Math.random() * slotImg.length);
        const randomNum9 = Math.floor(Math.random() * slotImg.length);
        // const randomNum = () => {
        //     const num = Math.floor(Math.random() * slotImg.length)
        //     return num;
        // };
        return (
            <div>
                <Slot
                    img1={slotImg[randomNum1]}
                    img2={slotImg[randomNum2]}
                    img3={slotImg[randomNum3]}
                    imgArr={slotImg}
                 />
                <Slot
                    img1={slotImg[randomNum4]}
                    img2={slotImg[randomNum5]}
                    img3={slotImg[randomNum6]}
                    imgArr={slotImg}
                 />
                <Slot
                    img1={slotImg[randomNum7]}
                    img2={slotImg[randomNum8]}
                    img3={slotImg[randomNum9]}
                    imgArr={slotImg}
                 />
            </div>
        )
    }
};