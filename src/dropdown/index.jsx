import i18next from "i18next";
import React, {Component} from "react";


class Dropdown extends Component{

    change(option){
        localStorage.setItem('lang',option.target.value);
        window.location.reload();
    }

    render(){
      const lang = localStorage.getItem('lang') || 'en';
      i18next.changeLanguage(lang);
        return(
            <nav className="container mb-4 mt-4">
            <div className="row">
              <div className="col-10">
                <select className="custom-select pull right" onChange={this.change} value={lang}>
                <option value="en">English</option>
                <option value="br">Português</option>
                </select>
              </div>
            </div>
          </nav>
        )
    }
}

export default Dropdown;