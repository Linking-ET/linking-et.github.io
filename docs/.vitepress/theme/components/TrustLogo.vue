<template>
    <div
            class="trustlogo"
            @click="handleClick">
        <img src="/res/img/Sectigo/sectigo_trust_seal_md_106x42.png" alt="Trust Logo" class="trustlogo-img" />
    </div>
</template>

<script setup>
// DV 证书徽章短名
const logoCode = "SECDV"

// 动态生成官方验证 URL（仅使用域名，不进行 URL 编码）
function buildTrustUrl(shortname) {
    const protocol = window.location.protocol + "//"
    const host = window.location.host
    const baseUrl = "https://secure.trust-provider.com/ttb_searcher/trustlogo"

    // 手动拼接参数，不使用 encodeURIComponent 或 URLSearchParams
    const params = `v_querytype=C&v_shortname=${shortname}&v_search=${protocol + host}&x=6&y=5`
    return `${baseUrl}?${params}`
}

// 点击徽章打开官方验证页面
function handleClick() {
    const url = buildTrustUrl(logoCode)
    const winFeatures = 'toolbar=0,scrollbars=1,location=1,status=1,menubar=1,resizable=1,width=374,height=660'
    window.open(url, 'tl_wnd_credentials' + Date.now(), winFeatures)
}
</script>

<style scoped>
.trustlogo-footer {
    display: flex;
    justify-content: center; /* 居中显示徽章 */
    padding: 12px 0;
}

.trustlogo {
    cursor: pointer;
}

.trustlogo-img {
    width: 106px;
    height: 42px;
}
</style>
