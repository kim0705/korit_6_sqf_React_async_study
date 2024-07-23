import React from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function PostPage(props) {
    const schoolNameInput = useInput();
    const departmentInput = useInput();
    const gradeInput = useInput();
    const nameInput = useInput();

    const schoolName = useInput();
    const phoneNum = useInput();
    const address = useInput();
    const name = useInput();

    const handleSubmit = () => {
        const student = { // student를 백엔드로 넘겨줄거임
            schoolName: schoolNameInput.value,
            department: departmentInput.value,
            grade: gradeInput.value,
            name: nameInput.value
        }

        // fetch("http://localhost:8080/basic/student", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(student)
        // }).then(response => {
        //     response.json().then(responseData => {
        //         console.log(responseData);
        //     })
        // })

        axios.post("http://localhost:8080/basic/student", student) // student객체를 JSON으로 자동 변환
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    
    const handleSubmit2 = () => {
        const teacher = {
            schoolName: schoolName.value,
            phoneNum: phoneNum.value,
            address: address.value,
            name: name.value
        };

        axios.post("http://localhost:8080/basic/teacher", teacher)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
            
    }
    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST)</h1>
            </header>
            <main>
                <h3>학생정보</h3>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text" onChange={schoolNameInput.onChange} value={schoolNameInput.value} />
                </p>
                <p>
                    <label htmlFor="">학과명: </label>
                    <input type="text" onChange={departmentInput.onChange} value={departmentInput.value} />
                </p>
                <p>
                    <label htmlFor="">학년: </label>
                    <input type="text" onChange={gradeInput.onChange} value={gradeInput.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text" onChange={nameInput.onChange} value={nameInput.value} />
                </p>
                <p>
                    <button onClick={handleSubmit}>전송</button>
                </p>

                <h3>선생님정보</h3>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text" onChange={schoolName.onChange} value={schoolName.value} />
                </p>
                <p>
                    <label htmlFor="">연락처: </label>
                    <input type="text" onChange={phoneNum.onChange} value={phoneNum.value} />
                </p>
                <p>
                    <label htmlFor="">주소: </label>
                    <input type="text" onChange={address.onChange} value={address.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text" onChange={name.onChange} value={name.value} />
                </p>
                <p>
                    <button onClick={handleSubmit2}>전송</button>
                </p>
            </main>
        </>
    );
}
export default PostPage;