const statusList = {
  // 所有内容的审核状态
  pendingReview: 1, // 待审核
  reviewSuccess: 2, // 审核成功
  reviewFail: 3, // 审核失败
  freeReview: 4, // 免审核
  deleted: 5 // 已删除
}
const statusListText = {
  // 所有内容的审核状态文字
  [statusList.pendingReview]: '待审核', // 待审核
  [statusList.reviewSuccess]: '审核成功', // 审核成功
  [statusList.reviewFail]: '审核失败', // 审核失败
  [statusList.freeReview]: '免审核', // 免审核
  [statusList.deleted]: '已删除' // 已删除
}

const articleType = {
  // 文章的类型
  article: 1, // 文章
  note: 2, // 笔记
  draft: 3 // 草稿
}

const articleTypeText = {
  // 文章的类型
  [articleType.article]: '文章', // 文章
  [articleType.note]: '笔记', // 笔记
  [articleType.draft]: '草稿' // 草稿
}

const dynamicType = {
  // 文章的类型
  dynamic: 1, // 默认动态
  img: 2, // 图片
  link: 3, // 链接
  video: 4 // 视频
}

const dynamicTypeText = {
  // 文章的类型
  [dynamicType.dynamic]: '默认动态', // 文章
  [dynamicType.img]: '图片', // 笔记
  [dynamicType.link]: '链接', // 草稿
  [dynamicType.video]: '视频' // 草稿
}

const userMessageType = {
  // 文章的类型
  system: 1, // 系统消息
  likeArticle: 2, // 喜欢文章
  collectBlog: 3, // 收藏个人专栏
  attentionUser: 4, // 关注用户
  articleComment: 5, // 文章评论
  dynamicComment: 6, // 动态评论
  booksComment: 7, // 小书评论
  bookComment: 8, // 小书章节评论
  collectBooks: 9, // 收藏小书
  likeDynamic: 10 // 喜欢动态
}

const userMessageAction = {
  newSystem: '新的系统消息',
  newLike: '新的喜欢',
  newCollect: '新的收藏',
  newAttention: '新的关注',
  newComment: '新的评论',
  newThumbs: '新的赞',
  commentNewReply: '评论新的回复'
}

module.exports = {
  statusList,
  statusListText,
  articleType,
  articleTypeText,
  dynamicType,
  dynamicTypeText,
  userMessageType,
  userMessageAction
}