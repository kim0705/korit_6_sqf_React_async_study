import React from 'react';

function PromisePage(props) {

    const loop = (name) => {
        // random 0 < 1
        const random = Math.floor(Math.random() * 10000) + 1;
        for (let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`);
        }
    }

    const testPromise = () => {
        return new Promise((resolve, reject) => {
            loop("test1");
            resolve("test1반복 완료");
        });
    }

    //  const testPromise = async () => {
    //      const response= {
    //
    //      }
    //      loop("test1")
    //      resolve("test1반복 완료");
    //      return response;
    //    }  

    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("test2");
            resolve("test2반복 완료");
        });
    }

    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("test3");
            resolve("test3반복 완료");
        });
    }

    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if (num === 0) {
                reject("test4오류!!!"); // reject는 기다렸다가 실행
                return;
            }
            resolve("test4성공!!!");
        });
    }

    const testPromise5 = async (num) => {
        console.log("test5");
        if (num === 0) {
            throw new Error("test5오류!!!"); // throw는 즉시 예외 실행
        }
        return "test5성공!!!";
    }

    const handleClick1 = () => {
        testPromise().then(r => console.log(r));
        testPromise2().then(r => console.log(r));
        testPromise3().then(r => console.log(r));
    }

    // const handleClick1 = () => {
    //     testPromise().then(r => {
    //         console.log(r);
    //         testPromise2().then(r => {
    //             console.log(r);
    //             testPromise3().then(r => {
    //                 console.log(r);

    //             });
    //         });
    //     });
    // }

    const handleClick2 = async () => {
        const r = await testPromise(); // resolve의 값을 r에 대입
        console.log(r);
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }

    const handleClick3 = () => {
        testPromise4(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.error(e);
            });

        testPromise5(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.error(e);
            });
    }

    const handleClick4 = async () => {
        try {
            const r = await testPromise4(1);
            console.log(r);
        } catch (e) {
            console.error(e);
        }

        try {
            const r = await testPromise5(1);
            console.log(r);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>
            <button onClick={handleClick2}>버튼2</button>
            <button onClick={handleClick3}>버튼3</button>
            <button onClick={handleClick4}>버튼4</button>
        </div>
    );
}

export default PromisePage;