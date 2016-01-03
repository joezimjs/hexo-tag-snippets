var snippetFileName = (hexo.config.snippets && hexo.config.snippets.file) || 'snippets'

hexo.extend.tag.register('snippet', function(args){
  var snippetId = args[0], snippet

  if (snippet = hexo.locals.get('data')[snippetFileName][snippetId])
    return snippet
  else
    hexo.log.err('Failed to find "' + snippetId + '" in the "' + snippetFileName + '" data file.')
})