import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  progress=0
  mode='light'
  message=null
  type=null
  state ={
    progress:0,
    mode:'light',
    type:null,
    message:null,
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  setMode = (mode)=>{
    this.setState({mode:mode})
  }
  setAlert = (message,type) =>{
    this.setState({
      message:message,
      type:type
    })
    setTimeout(() => {
      this.setState({alert:null});
    },2000)
  }
   

  toggleMode = () => {
    if(this.state.mode === 'light'){
      this.setMode('dark');
      document.body.style.backgroundColor = '#042743';
      this.setAlert("Dark mode has been enabled","success");
      // document.title="Dark Mode Enabled";
    }
    else{
      this.setMode('light');
      document.body.style.backgroundColor = 'white';
      this.setAlert("Light mode has been enabled","success");
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar toggleMode={this.toggleMode}  mode={this.state.mode} />
          <LoadingBar
            color={this.state.mode==='dark'?'white':'red'}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='general' pageSize={10} category='general' />}>
            </Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='business' pageSize={20} category='business' />}>
            </Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='entertainment' pageSize={20} category='entertainment' />}>
            </Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='health' pageSize={20} category='health' />}>
            </Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='science' pageSize={20} category='science' />}>
            </Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='sports' pageSize={20} category='sports' />}>
            </Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} mode={this.state.mode} toggleMode={this.toggleMode} key='technology' pageSize={20} category='technology' />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </>



    )
  }
}

export default App
