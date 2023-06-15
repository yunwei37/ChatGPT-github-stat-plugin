# chatgpt-github-stat-plugin

ChatGPT plugin to help you get insight to Github Repos and Users

When prompted for your website domain, type in 'https://chat-gpt-github-stat-plugin.vercel.app'

## Usage and Examples

Here are the same use cases expressed in more natural language:

1. **Getting information about a specific GitHub repository**

    You can ask for information about:

    - a specific GitHub repository, such as the number of stars, forks, and issues, the primary language used in the repository, license, etc.
    - the history of a specific GitHub repository, such as the number of stars over time.
    - the topic of repositories.
    - the README of a repository.

    For example:

    > Can you tell me the statistics for the https://github.com/Significant-Gravitas/Auto-GPT? Should I use it in my project? Tell me your analysis.

    ![info](public/info.png)

    You can ask questions about whether you should use a specific repository in your project, how to improve a specific repository as a maintainer, etc.

    You can easily get the charts of the history of a repository by using the charts plugin in ChatGPT:

    ![chart](public/stat-chart.png)

2. **Getting information about a GitHub user**

    You can ask for information about:
    
    - a specific GitHub user, such as the number of followers, the number of repositories, the number of contributions, total stars, total pull requests, followers etc.
    - the ranks of a specific GitHub user, Available ranks are S+ (top 1%), S (top 25%), A++ (top 45%), A+ (top 60%), and B+ (everyone). The values are calculated by using the cumulative distribution function using commits, contributions, issues, stars, pull requests, followers, and owned repositories.
    
    For example:
    
    > Can you show me how the activity of the GitHub user 'torvalds'? Tell me about him now.

    ![user](public/user-info.png)

3. **Comparing two repositories**

    You can compare two repositories by asking for information about both repositories. What's more, you can use charts plugin in ChatGPT to visualize the comparison.

   > Can you compare the 'react' repository from 'facebook' and the 'angular.js' repository from 'angular' on GitHub? Use charts to compare them, and give me a report. Think step by step on how to do it. You can put the same stats of two repo in one chart and compare them.

   ![compare](public/compare.png)

   charts:

    ![compare](public/compare-chart.png)

4. **Tracking the growth of a repository over time**

    You can easily track the growth of a repository over time and then using the charts plugin in ChatGPT to visualize the growth, with a single prompt.

    > Can you read the star history and stats of https://github.com/eunomia-bpf/wasm-bpf , analyze the result, and build charts for sthe starhistory(a linear representation of dates on a horizontal scale), and the statistics? Think step by step and choose the right ways.  To create a linear horizontal axis based on the provided dates, you can follow these steps:
    > 
    > Determine the range of dates: Identify the earliest and latest dates in the dataset.
    > Calculate the time span: Calculate the duration or time span between the earliest and latest dates. 
    > Determine the scale: Decide on an appropriate scale for the horizontal axis based on the time span. You can choose a suitable unit of measurement, such as days, and divide the horizontal space evenly based on the number of days in the time span.
    > Assign positions to the dates: Assign positions or coordinates on the horizontal axis to each date based on their relative distances from the starting point.

    ![star-history](public/history.png)

    and charts:

    ![star-history](public/history-chart.png)

5. **Analyzing the activity of a user over time**

    > tell me about https://github.com/Himself65 and alalyze his repo, what does the activity of a him over time?

    ![user-repo](public/user-repo.png)

## Project setup

1. Run the server

set the env `REACT_APP_GITHUB_ACCESS_TOKEN` as your github token and run the server:

```sh
export REACT_APP_GITHUB_ACCESS_TOKEN=<your github token>
npm run build
npm start
# If you run this in dev mode, the memory may not persist well as the server will randomly restart sometimes
```

2. Set up your GPT Plugin in the ChatGPT Plugin UI.


