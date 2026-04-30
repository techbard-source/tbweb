import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const isHome = fileData.slug === "index"
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        {isHome && (
          <p class="visitor-counter" style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--gray);">
            Total visits: <span id="visitor-count">-</span>
          </p>
        )}
        {isHome && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var el = document.getElementById('visitor-count');
                  if (!el) return;
                  var inc = !localStorage.getItem('_visited');
                  if (inc) localStorage.setItem('_visited', '1');
                  fetch('/count' + (inc ? '?inc=1' : '')).then(function(r){return r.json()}).then(function(d){
                    el.textContent = d.count.toLocaleString();
                  }).catch(function(){});
                })();
              `,
            }}
          />
        )}
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
