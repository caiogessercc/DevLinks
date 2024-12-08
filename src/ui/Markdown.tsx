import { useState } from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# 🌌 Caio Gesser Custodio

**\`Full-Stack ~ Junior Developer\`**


Sou um desenvolvedor **Full-Stack Junior**, gosto de criar projetos do zero, sempre buscando criar códigos limpos e eficientes. Embora design não seja minha principal habilidade, me empenho a estudar documentações e aprender o máximo possível sobre as tecnologias que uso para aprimorar minhas habilidades, transformando minhas ideias em realidade.  
Estou sempre buscando novos desafios e maneiras de evoluir como desenvolvedor. 🚀

---
---
---

### 📈 Estatísticas

![Caio's GitHub stats](https://github-readme-stats.vercel.app/api?username=caiogessercc&show_icons=true&theme=radical)
`;

function MarkdownPreview() {
  const [content, setContent] = useState<string>(markdownContent);

  return (
    <div className="max-w-full p-6 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-opacity-0">
      <ReactMarkdown className="text-xs dark:text-gray-100">
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownPreview;
