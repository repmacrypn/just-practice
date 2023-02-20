/* import { nanoid } from 'nanoid'; */
/* import uuid from 'react-uuid'; */
import React, { useState } from 'react'; //, { useState } 
/* import Calculator from './Calculator'; */
/* import UserParent from './UserParent'; */
/* import Employee from './Employee';
import Product from './Product';
import User from './User';
import UserLoop from './UserLoop';
import UserState from './UserState'; */

function App() {
  /* let [inputValue, setIV] = useState(100);                               Делаем грязь с датами рождения и возрастом

  function processInputResult(dataValue) {
    const modifiedValue = Number(dataValue);

    if (typeof modifiedValue === 'number' && !isNaN(modifiedValue)) {
      if (modifiedValue === 0) return 'Input valid age';

      return `age: ${dataValue}`;
    } else {

      const date = new Date();
      const age = parseInt(dataValue);

      if (!age) return 'Input at least one number at first';

      let month = date.getMonth() + 1;
      let day = date.getDate();
      const ageInPast = date.getFullYear() - age;


      if (day < 10) {
        day = '0' + day;
      }

      if (month < 10) {
        month = '0' + month;
      }

      return `Date of birth: ${day}:${month}:${ageInPast}`
    }
  }

  return (
    <p>
      <input value={inputValue} onChange={event => setIV(event.target.value)}></input>
      <span> {processInputResult(inputValue)}</span>
    </p>
  ); */

  /* const [inputValue1, setIV1] = useState(new Date());                       Разность дат между текущей и введенной.
  const [inputValue2, setIV2] = useState('2021-09-02');
  const [resDiffButton, setResDiffButton] = useState(0);

  function handleDate(dateString1, dateString2) {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    let dateDiff;

    if (date1 > date2) {
      dateDiff = date1 - date2;
    } else {
      dateDiff = date2 - date1;
    }

    return Math.floor(dateDiff / 60 / 60 / 24 / 1000);
  }

  return <>
    <input value={inputValue1} onChange={event => setIV1(event.target.value)}></input>
    <input value={inputValue2} onChange={event => setIV2(event.target.value)}></input>

    <p>
      <button onClick={() => setResDiffButton(handleDate(inputValue1, inputValue2))}>Calculate DiffDate</button>
      <span> Date Differance: {resDiffButton}</span>
    </p>
  </>; */

  /* const [inputValue, setIV] = useState(123);                                                         Сумма цифр в числе при блюре

  function calculateSumNum(currentNumber, id) {
    let sum = 0;

    while (currentNumber) {
      sum += currentNumber % 10;
      currentNumber = Math.floor(currentNumber / 10);
    }

    return document.getElementById(id).innerHTML = `Result: ${sum}`;
  }

  return <>
    <input value={inputValue} onBlur={() => calculateSumNum(+inputValue, 'appropriateAbstract')}
      onChange={event => setIV(event.target.value)}></input>
    <p id='appropriateAbstract'></p>
  </>; */

  /* const [checked, setChecked] = useState(false);                                         чекбоксы для слабых (кнопка, чекбокс, абзац)

  function handleCheckBox(checkedState, id) {
    const elem = document.getElementById(id);

    if (checkedState) return elem.innerHTML = 'Greetings';
    else return elem.innerHTML = 'Bye';
  }

  return <>
    Checkbox
    <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}></input>
    <p>
      <button onClick={() => handleCheckBox(checked, 'abstract')}>button</button>
    </p>
    <p id='abstract'></p>
  </>; */

  /* const [checked, setChecked] = useState(false);                                    чекбоксы с инфой для взрослых
  let message;

  if (checked) {
    message = <div>
      <h2>Ура, вам уже есть 18</h2>
      <p>контент для взрослых</p>
    </div>;
  } else {
    message = <div>
      <p>Увы, вам нет 18 :(</p>
    </div>;
  }

  return <>
    <input value={checked} type='checkbox' onChange={() => setChecked(!checked)}></input>
    {message}
  </>; */

  /* const [checked, setChecked] = useState(true);                                         чекбокс со скрытием елемента

  function handleChanges(id) {
    const elem = document.getElementById(id)

    if (checked) {
      elem.hidden = true;
    } else {
      elem.hidden = false;
    }

    setChecked(!checked);
  }



  return <>
    <input value={checked} onChange={() => handleChanges('abstract')} type='checkbox'></input>
    <p id='abstract'>
      Hi.. my name is? who.. my name is? What.. my name is?
    </p>
  </>; */

  /* const [value, setValue] = useState('');                                                      обычная работа с select\option
  const array = ['0-13', '14-17', '17-25', '25+'];
  const options = array.map((item, index) => {
    return <option value={index} key={index}>{item}</option>;
  });

  return <>
    <select value={value} onChange={(event) => setValue(event.target.value)}>{options}</select>
    <p>{array[value]}</p>
  </>; */

  /* const [radioValue, setRadioValue] = useState('Python');                           работа с кнопочками радио и выводом в абзац текста радио

  function changeHandler(event) {
    setRadioValue(event.target.value);
  }

  return <>
    <p>
      <span>Python</span>
      <input
        type='radio'
        name='radio'
        value='Python'
        onChange={changeHandler}
        checked={radioValue === 'Python' ? true : false}
      ></input>
    </p>

    <p>
      <span>C++</span>
      <input
        type='radio'
        name='radio'
        value='C++'
        onChange={changeHandler}
        checked={radioValue === 'C++' ? true : false}
      ></input>
    </p>

    <p>
      <span>JavaScript</span>
      <input
        type='radio'
        name='radio'
        value='JavaScript'
        onChange={changeHandler}
        checked={radioValue === 'JavaScript' ? true : false}
      ></input>
    </p>

    <p>
      Your fav one is {radioValue}
    </p>
    <h2>{radioValue === 'JavaScript' ? 'Ur a good one man :)' : ''}</h2>
  </>; */

  /* let i = 5;                                                                            добавление эл-та в массив

  const [noteArray, setNotes] = useState([1, 2, 3, 4, 5]);

  function addHandler(value) {
    setNotes([...noteArray, value]);
  }

  return <>
    <button onClick={() => addHandler(++i)}>buttonAdd</button>
    <p>{noteArray}</p>
  </>; */

  /* const [notesArray, setNotes] = useState([1, 2, 3, 4, 5]);                           реверс эррэй

  function reverseArray() {
    const copiedArray = Object.assign([], notesArray);
    copiedArray.reverse();
    setNotes(copiedArray);
  }

  return <>
    <button onClick={reverseArray}>reverse</button>
    <p>{notesArray}</p>
  </>; */

  /* const [arrayNotes, setArrayNotes] = useState([1, 2, 3, 4, 5]);                     добаавление в li того, что в инпуте через массивы
  const [IV, setIV] = useState('');

  let result = arrayNotes.map((note, index) => {
    return <li key={index}>{note}</li>
  });

  function handleBlurState() {
    setArrayNotes([...arrayNotes, IV]);

    const input = document.querySelector('input');
    input.value = '';
    setIV(input.value);

  }

  return <>
    <input type='text' value={IV} onBlur={handleBlurState} onChange={event => setIV(event.target.value)}></input>
    <ul>
      {result}
    </ul>
  </>; */

  /* const notes = ['a', 'b', 'c', 'd', 'e'];                                                кнопка с удалением тега li

  const [arrayNotes, setArrayNotes] = useState(notes);

  function deleteLiFunction(currentIndex) {
    setArrayNotes([...arrayNotes.slice(0, currentIndex), ...arrayNotes.slice(currentIndex + 1)]);
  }

  const result = arrayNotes.map((note, index) => {
    return <li key={index}>{note} <button onClick={() => deleteLiFunction(index)}>deleteThisLiNode</button></li>;
  });

  return <ul>
    {result}
  </ul>; */

  /* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];               инпуты, массивы и нахождение среднего арифметического введенных значений

  const [arrayNotes, setArrayNotes] = useState(array);

  function handleChange(currentIndex, event) {
    setArrayNotes([...arrayNotes.slice(0, currentIndex), +event.target.value, ...arrayNotes.slice(currentIndex + 1)]);
  }

  const resultInputs = arrayNotes.map((note, index) => {
    return <p key={index}> input number:
      <input
        value={note}
        key={index}
        onChange={event => handleChange(index, event)}></input>
    </p>
  });

  const resultAnswer = countAverageSum(arrayNotes);
  return <>
    {resultInputs}
    <p>
      Math Average: {isNaN(resultAnswer) ? 'Error: The text was mention in inputValue!' : resultAnswer}
    </p>
  </>; */

  /* const notes = ['a', 'b', 'c', 'd', 'e'];                                                   редактирование элементов массива через инпут

  const [noteArray, setNoteArray] = useState(notes);
  const [editVl, setEditVl] = useState(null);

  const resultLies = noteArray.map((note, index) => {
    return <li key={index}>{note} <button onClick={() => setEditVl(index)}>EditLi</button></li>
  });

  function handleChange(event) {
    setNoteArray([...noteArray.slice(0, editVl), event.target.value, ...noteArray.slice(editVl + 1)]);
  }

  return <ul>
    {resultLies}
    <input
      value={editVl === null ? '' : noteArray[editVl]}
      onChange={event => handleChange(event)}
      onBlur={event => event.target.value = ''}>
    </input>
  </ul>; */

  /* const [notes, setNotes] = useState([1, 2, 3, 4, 5]);         первый способ добавления и измменения элементов массива одновременно
  const [editNum, setEditNum] = useState(null);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return <p key={index} onClick={() => setEditNum(index)}>{note}</p>;
  });

  function changeItem(event) {
    setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
  }

  function stopEdit() {
    setEditNum(null);
  }

  function changeValue(event) {
    setValue(event.target.value);
  }

  function addItem() {
    setNotes([...notes, value]);
  }

  let input;

  if (editNum) {
    input = <input
      value={notes[editNum]}
      onChange={changeItem}
      onBlur={stopEdit}></input>
  } else {
    input = <input
      value={value}
      onChange={changeValue}
      onBlur={addItem}></input>
  }

  return <>
    {result}
    {input}
  </>; */

  /* const [notes, setNotes] = useState([1, 2, 3, 4, 5]);            второй способ добавления и измменения элементов массива одновременно
  const [editNum, setEditNum] = useState(null);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return <p key={index} onClick={() => startEdit(index)}>{note}</p>;
  });

  function startEdit(index) {
    setEditNum(index);
    setValue(notes[index]);
  }

  function changeHandler(event) {
    setValue(event.target.value);

    if (editNum) {
      setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
    }
  }

  function blurHandler(event) {
    if (!editNum) {
      setNotes([...notes, value]);
    } else {
      setEditNum(null);
    }

    setValue('');
  }

  return <div>
    {result}
    <input value={value} onChange={changeHandler} onBlur={blurHandler}></input>
  </div>; */

  /* const [obj, setObj] = useState({                                               обычный пример на работу стейтов и обьекетов
    prop1: 1,
    prop2: 2,
    prop3: 3,
  });

  return <>
    <button onClick={() => setObj({ ...obj, ...{ prop1: 7 } })}>btn1</button>
    <p>{obj.prop1}</p>
    <button onClick={() => setObj({ ...obj, ...{ prop2: 8 } })}>btn2</button>
    <p>{obj.prop2}</p>
    <button onClick={() => setObj({ ...obj, ...{ prop3: 9 } })}>btn3</button>
    <p>{obj.prop3}</p>
  </>; */

  /*   const id = 'qq';                                                изменение, удаление, добавление всего и вся в масссив обьектов
    const prop1 = 'name';
    const prop2 = 'cost';
    const prop3 = 'catg';
  
    const [arrObj, setArrObj] = useState(initProds);
  
    const resultAbsstr = arrObj.map((obj) => {
      return <p key={obj.id}>
        <span>{obj.name} </span>
        <span>{obj.catg} </span>
        <span>{obj.cost}</span>
      </p>;
    });
  
    function addItemHandler(obj) {
      obj.id = nanoid();
      setArrObj([...arrObj, obj]);
    }
  
    function changeProp() {
      const copy = Object.assign([], arrObj);
  
      const resultMap = copy.map(obj => {
        return obj.id === id ? { ...obj, [prop1]: obj[prop1] + '!!!' } : obj;
      });
  
      setArrObj(resultMap);
    }
  
    function receiveItem() {
      return arrObj.reduce((prVl, currVl) => {
        return currVl.id === id ? currVl : prVl
      }, {});
  
    }
  
    return <>
      {resultAbsstr}
      <button onClick={() => setArrObj(arrObj.filter(note => note.id !== id))}>deleteButton</button>
      <button onClick={() => addItemHandler({
        id: '',
        name: 'pr4',
        catg: 'catg4',
        cost: 400,
      })}>addButton</button>
      <button onClick={() => setArrObj(arrObj.map(obj => {
        return obj.id === newElem.id ? newElem : obj;
      }))}>changeItemBtn</button>
      <button onClick={() => {
        setArrObj(arrObj.map(obj => {
          return obj.id === id ? { ...obj, [prop1]: obj[prop1] + '!', [prop2]: +obj[prop2] * 10 } : obj;
        }));
      }}>changePropertyButt</button>
      <button onClick={changeProp}>scndWay</button>
      <button onClick={receiveItem}>receiveItemBtn</button>
    </>; */

  /* const [arrObjState, setArrObjState] = useState(initProds);     добавление обьектов в массив с помощью инпутов 1 способ(много стейтов)

  const [IV1, setIV1] = useState('');
  const [IV2, setIV2] = useState('');
  const [IV3, setIV3] = useState('');

  const result = arrObjState.map(obj => {
    return <p key={obj.id}>
      <span>{obj.name} </span>
      <span>{obj.catg} </span>
      <span>{obj.cost}</span>
    </p>;
  });

  function saveChanges() {

    const object = {
      id: nanoid(),
      name: IV1,
      catg: IV2,
      cost: IV3,
    };

    setArrObjState([...arrObjState, object]);

    setIV1('');
    setIV2('');
    setIV3('');
  }

  return <>
    {result}

    <p>Input name: <input value={IV1} onChange={event => setIV1(event.target.value)}></input></p>
    <p>Input catg: <input value={IV2} onChange={event => setIV2(event.target.value)}></input></p>
    <p>Input cost: <input value={IV3} onChange={event => setIV3(event.target.value)}></input></p>

    <button onClick={saveChanges}>save</button>
  </>; */

  /* const [stateArrObj, setStateArrObj] = useState(initProds);  добавление обьектов в массив с помощью инпутов 2 способ(много стейтов), мне не оч

  const [obj, setObj] = useState(getObject());

  const result = stateArrObj.map(obj => {
    return <p key={obj.id}>
      <span>{obj.name} </span>
      <span>{obj.catg} </span>
      <span>{obj.cost}</span>
    </p>;
  });

  function handleChanges(property, event) {
    setObj({ ...obj, [property]: event.target.value })
  }

  function saveChanges() {
    setStateArrObj([...stateArrObj, obj]);
    setObj(getObject());

  }

  return <>
    {result}

    <p>Input name: <input value={stateArrObj.name} onChange={event => handleChanges('name', event)}></input></p>
    <p>Input catg: <input value={stateArrObj.catg} onChange={event => handleChanges('catg', event)}></input></p>
    <p>Input cost: <input value={stateArrObj.cost} onChange={event => handleChanges('cost', event)}></input></p>

    <button onClick={saveChanges}>save</button>
  </>; */

  /* const [arrObj, setArrObj] = useState(initProds);                             изменение элементов массива обьектов

  const [editId, setEditId] = useState(null);

  const result = arrObj.map(obj => {
    return <>
      <p key={obj.id}>
        <span>{obj.name} </span>
        <span>{obj.catg} </span>
        <span>{obj.cost} </span>
      </p>
      <button onClick={() => setEditId(obj.id)}>changeThis</button>
    </>;
  });

  function getValue(property) {
    return arrObj.reduce((res, obj) => {
      return obj.id === editId ? obj[property] : res
    }, '');
  }

  function handleChanges(property, event) {
    setArrObj(arrObj.map(obj => {
      return obj.id === editId ? { ...obj, [property]: event.target.value } : obj;
    }));
  }

  return <>
    {result}

    <p>Input name: <input value={getValue('name')} onChange={event => handleChanges('name', event)}></input></p>
    <p>Input catg: <input value={getValue('catg')} onChange={event => handleChanges('catg', event)}></input></p>
    <p>Input cost: <input value={getValue('cost')} onChange={event => handleChanges('cost', event)}></input></p>

    <button onClick={() => setEditId(null)}>save</button>
  </>; */

  /* const [arrObj, setArrObj] = useState(initProds);                  одновременно и изменение, и добавление данных в массив обьектов

  const [editId, setEditId] = useState(null);

  const [obj, setObj] = useState(getObject());

  const result = arrObj.map(obj => {
    return <p key={obj.id}>
      <span>{obj.name} </span>
      <span>{obj.catg} </span>
      <span>{obj.cost} </span>

      <button onClick={() => setEditId(obj.id)}>changeMe</button>
    </p>

  });

  function getValue(property) {
    if (editId) {
      return arrObj.reduce((res, obj) => {
        return obj.id === editId ? obj[property] : res;
      }, '');
    } else {
      return obj[property];
    }
  }

  function changeItem(property, event) {
    if (editId) {
      setArrObj(arrObj.map(obj => {
        return obj.id === editId ? { ...obj, [property]: event.target.value } : obj;
      }));
    } else {
      setObj({ ...obj, [property]: event.target.value });
    }
  }

  function saveChanges() {
    if (editId) {
      setEditId(null);
    } else {
      setArrObj([...arrObj, obj]);
      setObj(getObject());
    }
  }

  return <>
    {result}

    <p>Input name: <input value={getValue('name')} onChange={event => changeItem('name', event)}></input></p>
    <p>Input catg: <input value={getValue('catg')} onChange={event => changeItem('catg', event)}></input></p>
    <p>Input cost: <input value={getValue('cost')} onChange={event => changeItem('cost', event)}></input></p>

    <button onClick={saveChanges}>save</button>
  </>; */

  /*   const [visible1, setVisible1] = useState(true);                  задание с кнопками и показыванием/скрытием эл-тов
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);
  
    let currElem;
  
    function showElem(elem, state, i) {
      if (state) {
        elem = <p>elem{i}</p>
      }
  
      return elem;
    }
  
    function createAbs(state, setter, i) {
      return <p>
        <button onClick={() => setter(!state)}>show/hide{i}</button>
      </p>;
    }
  
    return <>
      {createAbs(visible1, setVisible1, 1)}
      {showElem(currElem, visible1, 1)}
  
      {createAbs(visible2, setVisible2, 2)}
      {showElem(currElem, visible2, 2)}
  
      {createAbs(visible3, setVisible3, 3)}
      {showElem(currElem, visible3, 3)}
    </>; */

  /* const array = [                желательно проработать еще раз, тк нен сильно усвоил: редактирование инпутов  по клику на кнопку
    {
      text: '11',
      isEdit: false,
    },
    {
      text: '22',
      isEdit: false,
    },
    {
      text: '33',
      isEdit: false,
    },
  ];

  const [arr, setArr] = useState(array);

  const result = arr.map((obj, index) => {
    let elem;

    if (!obj.isEdit) {
      elem = <span>{obj.text}</span>;
    } else {
      elem = <input value={obj.text} onChange={(event) => handleChange(event, index)}></input>
    }

    return <li key={index}>
      {elem} <button onClick={() => handleClick(index)}>Change/Save Me</button>
    </li>;
  });

  function handleClick(index) {
    if (arr[index].isEdit) {
      const copy = Object.assign([], arr);

      copy[index].isEdit = false;

      setArr(copy);
    } else {
      const copy = Object.assign([], arr);

      copy[index].isEdit = true;

      setArr(copy);
    }
  }

  function handleChange(event, index) {
    const copy = Object.assign([], arr);

    copy[index].text = event.target.value;

    setArr(copy);
  }

  return <ul>
    {result}
  </ul>; */

  /* const [vl, setVl] = useState('text');                                                   редактирование инпута по кнопкам

  const [editInProcess, setEditInProcess] = useState(false);

  let elem;

  if (editInProcess) {
    elem = <input value={vl} onChange={event => setVl(event.target.value)}></input>
  } else {
    elem = <p>{vl}</p>
  }

  return <>
    {elem}
    <button onClick={() => setEditInProcess(true)}>editAbstract</button>
    <button onClick={() => setEditInProcess(false)}>saveChanges</button>
  </>; */

  /* const [nameArray, setNameArray] = useState(user);                                   редактирование li в обьекте через кнопки

  const result = nameArray.map((obj, index) => {
    let elem;

    if (obj.editInProcess) {
      elem = <input
        value={obj.name}
        onChange={event => {
          const copy = Object.assign([], nameArray);
          copy[index].name = event.target.value;
          setNameArray(copy);
        }}
        onBlur={() => {
          const copy = Object.assign([], nameArray);
          copy[index].editInProcess = false;
          setNameArray(copy);
        }}>
      </input>;
    } else {
      elem = <span>{obj.name}</span>;
    }

    return <li key={index}>{elem} <button onClick={() => editLi(index)}>editLi</button></li>
  });

  function editLi(index) {
    setNameArray(nameArray.map((obj, i) => {
      return i === index ? { ...obj, editInProcess: true } : obj;
    }));
  }

  return <ul>
    {result}
  </ul>; */

  /* const name1 = 'Art1kkkk';                                 для юзеров
  const cost1 = '100';

  const name2 = 'Kostik';
  const cost2 = '200';

  const name3 = 'Chukcha';
  const cost3 = '300'; */

  /* const employeeData = [                                        для работников
    {
      id: nanoid(),
      name: 'Chukcha',
      sur: 'qqq',
      age: 1488,
    },
    {
      id: nanoid(),
      name: 'Kost1k',
      sur: 'kkk',
      age: 1337,
    },
    {
      id: nanoid(),
      name: 'Art1k',
      sur: 'fff',
      age: 228,
    },
  ];
 */
  /* const result = employeeData.map(obj => {                                                    штука с циклом
    return <UserLoop key={obj.id} name={obj.name} surname={obj.sur} age={obj.age}></UserLoop>
  });
 */

  /* const [celDegrees, setCelDegrees] = useState(0); */                                    //для перевода цельсиев/кельвинов


  return <div>
    {/* <Product></Product>                                            работа с продуктами: начало

    <User name={name1} cost={cost1}></User>                            работа с юзерами
    <User name={name2} cost={cost2}></User>
    <User name={name3} cost={cost3}></User>

    <Employee surname={employeeData[0].sur} name={employeeData[0].name} age={employeeData[0].age}></Employee>     работа с рабочими
    <Employee surname={employeeData[1].sur} name={employeeData[1].name} age={employeeData[1].age}></Employee>
    <Employee surname={employeeData[2].sur} name={employeeData[2].name} age={employeeData[2].age}></Employee>

    {result}                                                                      цикл               

    <UserState></UserState> */                                                    //стейты и работа с юзерами

      {/* <UserParent></UserParent> */ }                                      //тож прикольная тема про юзеров и инпуты с кнопками
    }

    {/* Celcum: <span>{celDegrees} </span>                   два инпута: одновременный перевод из цельсия в келивины и наоборот
    <input value={celDegrees} onChange={event => setCelDegrees(event.target.value)}></input> K:
    <span> {+celDegrees + 351} </span>
    <input value={+celDegrees + 351} onChange={event => setCelDegrees(+event.target.value - 351)}></input> */}

    {/* <Calculator></Calculator>                  отслеживатель состояний через градусы цельсия: ж/г/т      */}


  </div>;
}

/* const user = [                                           говнообьект
  {
    name: 'Art1k',
    editInProcess: false,
  },
  {
    name: 'Chikcha',
    editInProcess: false,
  },
  {
    name: 'Kost1k',
    editInProcess: false,
  },
]; */

/* const initProds = [                                   //обьект с данными о продуктах для реализации примеров по массивам обьектов
  {
    id: nanoid(),
    name: 'pr1',
    desc: 'long desc1',
    comm: 'lonj comm1',
    cost: 100,
  },
  {
    id: 'qq',
    name: 'pr2',
    desc: 'long desc2',
    comm: 'lonj comm2',
    cost: 200,
  },
  {
    id: nanoid(),
    name: 'pr3',
    desc: 'long desc3',
    comm: 'lonj comm3',
    cost: 300,
  },
]; */

/* const newElem = {                                                       просто newElem на всякий
  id: 'qq',
  name: 'pr5',
  catg: 'catg5',
  cost: 500,
}; */

/* function countAverageSum(array) {                                          функция для вычисления среднего арифметического
  return array.reduce((previousValue, value) => {
    return previousValue + value;
  }) / array.length;
} */

/* function getObject() {                                                       функция для создания пустого обьекта с рандомным id
  return {
    id: nanoid(),
    name: '',
    catg: '',
    cost: '',
  };
} */

export default App;
