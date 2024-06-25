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
            row-gap: 1em;
        }

        .block {
            background-color: #323741;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 1em;
            margin: 1em;
        }
    `;

    render() {
        console.log(this.data)
        if (!this.data) {
            return nothing;
        }

        switch (this.data.type) {
            case "text":
                return html`
                    <div class="block">
                        <page-text-block
                            ?editable=${this.data.editable}
                            ?compact=${this.data.compact}
                            value="${this.data.value}">
                        </page-text-block>
                    </div>
                `
            case "youtube":
                return html`
                    <div class="block">
                        <page-youtube-block 
                            ?editable=${this.data.editable}
                            ?compact=${this.data.compact}
                            value="${this.data.value}">
                        </page-youtube-block>
                    </div>
                `
            default:
                return nothing;
        }
    }
}

customElements.define('page-block-renderer', PageBlockRenderer);