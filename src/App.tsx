import "katex/dist/katex.min.css"
import MarkdownRenderer from './MarkdownRenderer'

const content = `
# Markdown

# This is heading 1

## This is heading 2

### This is heading 3

#### This is heading 4

This is paragraph, **Lorem Ipsum** is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and __more recently with desktop publishing software, yeah it’s underline,__ including versions of Lorem Ipsum.

The next is imageee:

 ![](attachments/bf67f10a-97a7-49d5-a105-c885d08022ec.png " =627x342")

Should we support \`inline code\`?

And also with code blocks in different language:

Like c:

\`\`\`clike
#include <WiFi.h>

const char* wifiSsid = "SSID";
const char* wifiPassword = "PASSWORD";

void setup() {
  Serial.begin(115200);
  Serial.println(WiFi.localIP());
}

void loop() {
  if(WiFi.status() == WL_CONNECTED){
    Serial.println("Still connected with IP address: ");
    Serial.println(WiFi.localIP());
  } else {
      Serial.println("Wi-Fi Disconnected");
  }
  
  delay(1000);
}
\`\`\`
Like typescript:
\`\`\`typescript
function add(a: number, b: number){
  return a + b;
}
\`\`\`


And bash:

\`\`\`bash
sudo apt install nginx
\`\`\`

And also with bullet code block

* Print hello world

  \`\`\`bash
  echo "Hello World"
  \`\`\`
* Say hi to nested bullet
  * Hi 👋
    * And another one level!

What about table?

| Col 1 | Col 2 | Col 3 |
|----|----|----|
| Hi | Nested \`code\` | Wow |
| Hi 2 | **Bold** text | And ==highlighted== |

<br/>
:::info This is ==an info block== :::
<br/>
:::info
Noticeee

:::
<br/>

:::success
This is what success look like

And nested *__rich__* text.

:::

<br/>
:::warning
Warning this should caution

:::
<br/>

:::tip
Another tips, see this photo:

 ![](attachments/1f7ce400-9744-41e7-ab31-f9b8cde26ad4.jpeg)

:::
<br/>
With some horizontal line, good night 💤


---

And Also Math!

The lift coefficient ($C_L$) is a dimensionless coefficient.

`

function App() {
  return (
    <MarkdownRenderer content={content} />
  )
}

export default App
