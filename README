# CS3043 Final Project: A&L News

This project is a web-based artifact designed to educate users on identifying misinformation and AI-generated content online. It presents a simulated news feed containing articles with various "red flags."

## How the Project Meets Rubric Criteria

### Real World Artifact

*   **Distribution:** The website is a live Flask application. To track distribution, the [`app.py`](app.py) backend includes a function [`log_ip_address`](app.py) that records the unique IP address of each visitor in [`viewed.txt`](viewed.txt). This provides tangible evidence of viewership by people outside the class.
*   **Accessibility:** As a standard web application, the artifact is accessible to anyone with a web browser. The content is designed for a general audience, addressing the universally relevant topic of media literacy.

### Relevant to Course Topic

*   **Course Connection:** The project directly engages with the social implications of information processing, a core theme of the course. The "About" section in [`templates/index.html`](templates/index.html) explicitly states its purpose: to showcase articles about "the use of AI in the news and the ethical implications that follow."
*   **Specific Topics:** It tackles specific issues discussed in class, such as AI-generated content, misinformation, and the erosion of trust in digital media. The "Indicators of AI-generated Content" modal provides a practical guide based on real-world patterns observed in Large Language Models (LLMs).

### Breadth

*   **Multiple Perspectives:** The project covers a wide range of topics where misinformation is prevalent. The filter categories on the main page (`Health`, `Finance`, `Tech`, `Politics`, `Science`, etc.) represent distinct areas of focus, as defined in [`templates/index.html`](templates/index.html). It also contains both Aaron and Logan's essay for the class which puts our perspective's on the topic.
*   **Nuanced Sub-perspectives:** Within each category, the articles (defined in [`script.js`](script.js)) demonstrate various tactics used to mislead readers. These are identified with flags like `sensational`, `no-sources`, `correlation-vs-causation`, `conspiracy-theory`, and `violates-physics`. These flags serve as actionable "sub-perspectives" that teach users what to look for.

### Depth

*   **Audience and Call to Action:** The intended audience is the general internet user. The clear call to action is for users to become more critical consumers of information. The site provides the tools for this by allowing users to read example articles, see the associated red flags, and learn from the "Indicators of AI" guide.
*   **Credibility and Citation:** The project establishes authority by providing well-researched, credible information. The "Indicators of AI-generated Content" guide in [`templates/index.html`](templates/index.html) cites its inspiration from the Wikipedia article "Signs of AI writing," lending it verifiable credibility. The articles themselves, while fabricated for demonstration, contain examples of fake citations (e.g., invalid DOIs and ISBNs in article `a10`) to teach users how to verify sources.

### Personal or Professional Relevance

*   **Professional Standards:** The project is built to modern web development standards, making it a portfolio-ready piece.
    *   **Frontend:** It uses clean HTML, modern CSS for a responsive layout (as seen in [`style.css`](style.css)), and vanilla JavaScript for dynamic client-side functionality ([`script.js`](script.js)).
    *   **Backend:** It is powered by a Python Flask server ([`app.py`](app.py)), demonstrating knowledge of a popular web framework.
    *   **Hosting:** The application is designed to be hosted on a live server, as evidenced by the Flask development server configuration in [`app.py`](app.py).
*   **Credibility as an Independent Source:** The polished UI, clear purpose, and well-structured content make the website credible as a standalone educational resource. The footer in [`templates/index.html`](templates/index.html) provides clear attribution to the authors, Aaron Abramson & Logan Bachman.
