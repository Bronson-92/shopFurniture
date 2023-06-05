import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стільчик сірий',
          img: 'grey-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '50.99',
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '105.99',
        },
        {
          id: 3,
          title: 'Диван Темний',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofas',
          price: '230.99',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamps',
          price: '15.99',
        },
        {
          id: 5,
          title: 'Комод темний',
          img: 'dresser.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'dressers',
          price: '80.99',
        },
        {
          id: 6,
          title: 'Стільчик білий',
          img: 'white-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '50.99',
        },
        {
          id: 7,
          title: 'Настільна лампа',
          img: 'floor-lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamps',
          price: '55.99',
        },
        {
          id: 8,
          title: 'Комод світлий',
          img: 'white-dresser.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'dressers',
          price: '120.99',
        },
        {
          id: 9,
          title: 'Диван Світлий',
          img: 'white-sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofas',
          price: '210.99',
        }
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem  && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === "all") {
      this.setState({currentItems: this.state.items})
      return
  }
  
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder (item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
