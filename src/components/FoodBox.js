import React from "react"

function FoodBox(){
    return (
        
        <>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://i.imgur.com/eTmWoAN.png" alt=""/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Pizza</strong> <br />
                  <small>400 cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
    </>
    )
}

export default FoodBox