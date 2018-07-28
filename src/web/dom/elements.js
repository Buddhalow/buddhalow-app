import $ from 'jquery'

export class TabBarElement extends HTMLElement {
    connectedCallback() {
        if (!this.created) {
            this._data = {
                objects: []
            }
        }
    }
    set data (value) {
        this._data = value
        this.render()
    }
    get data() {
        return this._data
    }
    render() {
        this.innerHTML = ''
        for (let obj of this.data.objects) {
            let tab = document.createElement('bungalow-tab')
            tab.setAttribute('data-id', obj.id)
            tab.innerHTML = obj.name
            this.appendChild(tab)
        }
    }
}

function setActiveTab(id) {
    $('bungalow-tabcontent').hide()
    $('bungalow-tabcontent[id="' + id + '"]').show()
    $('bungalow-tab').removeClass('active-tab')
    $('bungalow-tab[data-id="' + id + '"]').addClass('active-tab')
}

customElements.define('bungalow-tabbar', TabBarElement)

export class TabElement extends HTMLElement {
    connectedCallback() {
        if (!this.created) {
            this.addEventListener('mousedown', (e) => {
                setActiveTab(e.target.dataset.id)
            })
            this.created = true
        }
    }
}
 
customElements.define('bungalow-tab', TabElement)
export class TabContentElement extends HTMLElement {
    connectedCallback() {
        if (!this.created) {
            
        }
    }
}
customElements.define('bungalow-tabcontent', TabContentElement)

setActiveTab('overview')
