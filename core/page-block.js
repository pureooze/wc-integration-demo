import {css, LitElement, nothing} from 'lit';

export class PageBlock extends LitElement {
    static properties = {
        value: { type: String },
        editable: { type: Boolean },
        compact: { type: Boolean }
    };

    render() {
        return nothing;
    }
}

customElements.define('page-block', PageBlock);