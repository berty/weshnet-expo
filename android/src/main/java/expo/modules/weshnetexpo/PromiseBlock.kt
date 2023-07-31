package expo.modules.weshnetexpo

//
//  expo.modules.weshnetexpo.PromiseBlock.kt
//  WeshnetExpo
//
//  Created by Guilhem Fanton on 10/07/2023.
//

import expo.modules.kotlin.Promise
import network.weshnet.core.PromiseBlock as IPromiseBlock

class PromiseBlock(val promise: Promise): IPromiseBlock {
    // expo.modules.weshnetexpo.PromiseBlock aims to keep reference over promise object so go can play with
    // until the promise is resolved
    companion object {
        private var promises = mutableSetOf<PromiseBlock>()
    }

    init {
        store()
    }

    override fun callResolve(reply: String?) {
        this.promise.resolve(reply ?: "")
        this.remove() // cleanup the promise
    }

    override fun callReject(err: Exception?) {
        this.promise.reject(WeshnetCoreError(err))
        this.remove() // cleanup the promise
    }

    private fun store() {
        promises.add(this)
    }

    private fun remove() {
        promises.remove(this)
    }
}
