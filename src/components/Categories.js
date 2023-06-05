import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всі",
        },
        {
          key: "chairs",
          name: "Стільці",
        },
        {
          key: "tables",
          name: "Столи",
        },
        {
          key: "sofas",
          name: "Дивани",
        },
        {
          key: "lamps",
          name: "Лампи",
        },
        {
          key: "dressers",
          name: "Комоди",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories