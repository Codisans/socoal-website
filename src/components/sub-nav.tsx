export function SubNav() {
  return (
    <div className="px-4 pt-2 text-sm font-medium text-dark-blue md:px-10">
      <ul className="ml-auto flex flex-nowrap justify-end gap-4 leading-none">
        <li>
          <a
            className="hover:underline"
            href="https://socoalchile.cl/webmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webmail
          </a>
        </li>
        <li>
          <a
            className="hover:underline"
            href="https://zima-client.r2.icewhale.io/get/v2/win/x64/latest"
            target="_blank"
            rel="download"
          >
            &darr; Nube
          </a>
        </li>
      </ul>
    </div>
  )
}
