var assessments = Array.from(document.querySelectorAll('.mia-listItem:has(.mia-reportTask .mia-assessmentResults)'))
    .filter(e => e.children[0].innerText.includes("Assessment:"))
    .map(e => {
        const textParts = e.innerText.split(/\n/g);
        textParts[0] = textParts[0].split('|')[0];

        return textParts;
    })
    .sort((a, b) => new Date(a[1]).getTime() - new Date(b[1]).getTime())
    .map(e => {
        e.push(parseFloat(e[2]));

        return e;
    });

assessments.push([assessments.reduce((acc, e) => e[3] + acc, 0) / assessments.length]);

var assessmentResults = assessments
    .map(e => e.join('\t'))
    .join('\n');

copy(assessmentResults);
