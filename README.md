# <a href="https://nnext.ai/"><img src="https://d3g1vr8yw3euzd.cloudfront.net/nnext-ultra-wide-tingle.png" alt="Aigent"></a>

## About


Aigent is an experiomental agent framework powered by GPT-4 that operates on dataframes.
Powered by the remarkable GPT-4, this program ingeniously links together thoughts from
Large Language Models (LLMs) to autonomously accomplish your desired objectives.
As a groundbreaking example of GPT-4 operating entirely independently, Auto-GPT pushes
the frontiers of AI's potential to new and awe-inspiring heights.

<a href="https://twitter.com/intent/follow?screen_name=nnextai"><img src="https://img.shields.io/badge/Follow-nnextai-blue.svg?style=flat&logo=twitter"></a>

[Installation](#installation) |  [Quick Start](#quick-start) | [Documentation](#documentation)

## Installation

By far the easiest way to install the Aigent server is to use docker.

```sql
wget https://raw.githubusercontent.com/nnextai/aigent/main/docker-compose.yaml
docker-compose up -d
```

### Supported Python Versions

```shell
Python >= 3.7, < 3.11
```

#### Mac/Linux

```shell
pip install virtualenv
virtualenv <your-env>
source <your-env>/bin/activate
<your-env>/bin/pip install nnext
```

#### Windows

```shell
pip install virtualenv
virtualenv <your-env>
<your-env>\Scripts\activate
<your-env>\Scripts\pip.exe install nnext
```

# Features
* 🌐 Internet access for searches and information gathering
* 📥 Long-term and short-term memory management 
* 🧠 GPT-4 & Anthropic instances for text generation 
* 🔗 Access to popular websites and platforms 
* 🗃️ File storage and summarization with GPT-3.5 
* 🔌 Extensibility with Plugins

## Quick Start

In order start interacting with NNext, you need to obtain a client
here [https://console.nnext.ai/](https://console.nnext.ai/).

Here's a quick example showcasing how you can create an index, insert vectors/documents and search among them via NNext.

Let's begin by installing the Connecting to NNext.

```sql
SELECT images.uid,
       images.name,
       images.vector < - > 'VECTOR(0.19, 0.81, 0.75, 0.11)'::vector AS dist
FROM nnext-public-data.images.laion
ORDER BY
    dist
    LIMIT 100
```

```python
import nnext

nnclient = nnext.NNextClient(api_key="NNEXT_API_KEY")

# Perform a query.
QUERY = """
        SELECT images.uid, images.name,
          images.vector <-> 'VECTOR(0.19, 0.81, 0.75, 0.11)'::vector AS dist
        FROM nnext-public-data.images.laion
        ORDER BY
            dist
        LIMIT 100;
    """
query_job = nnclient.query(QUERY)  # API request
rows = query_job.result()  # Waits for query to finish

for row in rows:
    print(row.name)
```

## Documentation

More documentation is available here here [https://nnext.ai/docs](https://nnext.ai/docs).:

<a href="https://nnext.ai/docs" target="_blank" rel="noopener noreferrer"><img src="https://d3g1vr8yw3euzd.cloudfront.net/3.png" height="100"></a>
