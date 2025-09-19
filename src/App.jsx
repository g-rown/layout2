import './App.css'

function Row1Sides() {
    return <div className="r1-sides"></div>
}

function Row1Center() {
    return <div className="r1-center">
        <Row1CenterContents name = "Ronian" />
        <Row1CenterContents name = "Gulles" />
    </div>
}

function Row1CenterContents(props) {
    return <div className="r1-contents">{props.name}</div>
}

function Row1() {
    return <div className="row1">
        <Row1Sides />
        <Row1Center />
        <Row1Sides />
    </div>
}

function Row2() {
    return <div className="row2">
        <div className="left"></div>

        <div className="right">
            <div className="r2-rg-top"></div>
            <div className="r2-rg-bottom"></div>
        </div>
    </div>
}

function Row3Sides() {
  return <div className="r3-sides"></div>;
}
function Row3Center(props) {
  return <div className="r3-center">{props.text}</div>;
}

function Row3() {
  return <div className="row3">
    <Row3Sides />
    <Row3Center text="C-PCIT9"/>
    <Row3Center text="IT3A"/>
    <Row3Sides />
  </div>;
}

function App() {
  return (
    <>
    <div className="container">
        <Row1 />
        <Row2 />
        <Row3 />
    </div>
    </>
  )
}

export default App