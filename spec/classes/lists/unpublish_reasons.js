unpublishReasonsTemplate = path.resolve(__dirname, 'unpublish_reasons_template.json');

exports.getUnpublishReasons = function () {
    return jf.readFileSync(unpublishReasonsTemplate);
}

exports.saveUnpublishReasons = function (unpublishReasonsData) {
    return jf.writeFileSync(unpublishReasonsTemplate, unpublishReasonsData);
}