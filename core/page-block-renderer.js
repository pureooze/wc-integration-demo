import { nothing, LitElement, html, css } from 'lit';
import './page-text-block'
import './page-youtube-block'

export class PageBlockRenderer extends LitElement {
    static properties = {
        data: { type: Object }
    };

    static styles = css`

        :host {
            display: flex;
            justify-content: center;
        }

        .block {
            background-color: #323741;
            width: 50vw;
            display: flex;
            justify-content: center;
            padding: 1em;
        }
    `;

    render() {
        if (!this.data) {
            return nothing;
        }

        switch (this.data.type) {
            case "text":
                return html`
                    <div class="block">
                        <page-text-block ?editable=${this.data.editable} value="${this.data.value}"></page-text-block>
                    </div>
                `
            case "youtube":
                return html`
                    <div class="block">
                        <page-youtube-block ?editable=${this.data.editable} value="${this.data.value}"></page-youtube-block>
                    </div>
                `
            default:
                return nothing;
        }
    }
}

customElements.define('page-block-renderer', PageBlockRenderer);